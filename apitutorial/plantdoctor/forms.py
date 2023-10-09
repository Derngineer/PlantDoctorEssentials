from django import forms


class PlantDetectionForm(forms.Form):
    image = forms.ImageField(label='Upload an image')
    plant_name = forms.ChoiceField(label='Select Plant Name', choices=[('corn_maize', 'Corn maize'), 
                                                                       ('grapes', 'Grapes'), 
                                                                       ('tomato', 'Tomato'),
                                                                       ('potato', 'Potato'),])
    
