# import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] ='2'
import tensorflow as tf
from tensorflow import keras
from PIL import Image
import numpy as np

# I need to add classes 

def load_model(plant_choice):

    if plant_choice == 'corn_maize':
        chosen_path ='/Users/mac/myproject_4/env/nyanzvi/plantdoctor/models_tf/corn_maize_classifier_0001'
        class_names = ['Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
                        'Corn_(maize)___Common_rust_',
                        'Corn_(maize)___Northern_Leaf_Blight',
                        'Corn_(maize)___healthy']
        


    elif plant_choice == 'grapes':
        chosen_path = '/Users/mac/myproject_4/env/nyanzvi/plantdoctor/models_tf/grapes_classifier_0001'
        class_names = ['Grape___Black_rot',
                        'Grape___Esca_(Black_Measles)',
                        'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                        'Grape___healthy']
    elif plant_choice == 'potato':
        chosen_path = '/Users/mac/myproject_4/env/nyanzvi/plantdoctor/models_tf/potato_classifier_1'
        class_names = ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']


    elif plant_choice == 'tomato':
        chosen_path = '/Users/mac/myproject_4/env/nyanzvi/plantdoctor/models_tf/tomato_classifier_0001'
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
    model = tf.keras.models.load_model(f'{model_path}')

    return model, class_names

# current_model, class_names = load_model('grapes')
# print(current_model.summary(), class_names)

def img_collect_process(path, target_size =(256,256)):
   
    img = tf.keras.preprocessing.image.load_img(path)
    img = img.resize(target_size, Image.BILINEAR)
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)
    return img_array

# img_array = img_collect_process('img.jpeg')

# classname_model = load_model('grapes')   
 
def img_predict_class(classname_model ,img_array):
    current_model, class_names = classname_model


    predictions = current_model.predict(img_array)
    predicted_class = class_names[np.argmax(predictions[0])]
    print(predicted_class)
    return predicted_class



    