import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] ='2'
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np
import requests
import json

# I need to add classes 

def load_model(plant_choice):

    if plant_choice == 'corn_maize':
        chosen_path ='corn_maize_classifier'
        class_names = ['Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
                        'Corn_(maize)___Common_rust_',
                        'Corn_(maize)___Northern_Leaf_Blight',
                        'Corn_(maize)___healthy']
        


    elif plant_choice == 'grapes':
        chosen_path = 'grapes_classifier'
        class_names = ['Grape___Black_rot',
                        'Grape___Esca_(Black_Measles)',
                        'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                        'Grape___healthy']
    elif plant_choice == 'potato':
        chosen_path = 'potato_classifier'
        class_names = ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']


    elif plant_choice == 'tomato':
        chosen_path = 'tomato_classifier'
        class_names = ['Tomato___Bacterial_spot',
                        'Tomato___Early_blight',
                        'Tomato___Late_blight',
                        'Tomato___Leaf_Mold',
                        'Tomato___Septoria_leaf_spot',
                        'Tomato___Spider_mites Two-spotted_spider_mite',
                        'Tomato___Target_Spot',
                        'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
                        'Tomato___Tomato_mosaic_virus',
                        'Tomato___healthy']
        
    model_path = chosen_path

    # model = tf.keras.models.load_model(f'{model_path}')

    return model_path, class_names



def img_collect_process(path, target_size =(256,256)):
   
    img = tf.keras.preprocessing.image.load_img(path)
    img = img.resize(target_size, Image.BILINEAR)
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)
    return img_array




def img_predict_class(classname_model ,img_array):
    print("we are here in the predict function")
    model_name, class_names = classname_model
    # predictions = current_model.predict(img_array) this uses models and can be ignored

    request_url = f'http://tfserving:8501/v1/models/{model_name}:predict'

    print('give me the classname:', class_names)

    img_list = img_array.numpy().tolist()
    print("we went past converion")
    print("img list", img_list)
    
    request_body = {
    "signature_name": "serving_default",
    "instances": img_list
    }
    request_json = json.dumps(request_body)    
    request_headers = {"content-type": "application/json"}
    print("diagnose this section")
    print("response up or down:",requests.get(request_url))
    print('url works')

    json_response = requests.post(request_url, data=request_json, headers=request_headers) 

    print("request was actually sent")
    response_body = json.loads(json_response.text)
    print("response from model up top",response_body)
    predictions = response_body['predictions']
    predicted_class = class_names[np.argmax(predictions[0])]
    print(predicted_class)
    print("all executed all done and said")
    return predicted_class

