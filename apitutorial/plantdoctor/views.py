from django.shortcuts import render
from django.http import HttpResponse
# from .forms import PlantDetectionForm
from django.core.files.storage import default_storage
from .plant_detector import img_predict_class, load_model, img_collect_process
from .prescribe_llm import create_prescription
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PlantDetectionSerializer, DataSerializer
from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.


def hello(requests):
    return HttpResponse('Lets get the work started')

class PickDiseaseView(APIView):
    # permisssion_classes =[permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format= None):
        if request.method == 'POST':
            serializer = PlantDetectionSerializer(data=request.data)
            if serializer.is_valid():
                image = serializer.validated_data['image']
                plant_name = serializer.validated_data['plant_name']
                
                print(plant_name, plant_name)

                classname_model = load_model(plant_name)
                if classname_model:
                    print("model loaded is:", classname_model)
                else:
                    print("model not loaded")

                path_name = default_storage.save(image.name, image)

                path_url = default_storage.path(path_name)
                path = path_url

                print("here is the path:", path)

                print('random check point, could the issue be path')

                print("here is the path:", path)

                img_array = img_collect_process(path)

                predicted_class =  img_predict_class( classname_model, img_array=img_array)
                print(predicted_class)

                prescription = create_prescription(plant_name, predicted_class)
                print(prescription)
                
                response_data = {
                    'plant_name': plant_name,
                    # 'serializer': serializer,
                    'predicted_class': predicted_class,
                    'prescription': prescription
                }

            

                return Response(response_data)
        
            else:
            
                return Response({'error': 'Form is not valid'}, status=400)


        return Response({'error': 'Invalid request method'}, status=405)

@api_view(["GET"])
def testing_view(request):
    response_data ={
                "name": "Malcom",
                "age": 21,
                "profession":"footballer",
            }
    
    return Response(response_data)
      

@api_view(["POST"])
def add_data(request):
    serializer = DataSerializer( data=request.data)
    if serializer.is_valid():
        # serializer.save()
        return Response(serializer.data)
    
    else:
        return Response({"error":"form invalid"})

