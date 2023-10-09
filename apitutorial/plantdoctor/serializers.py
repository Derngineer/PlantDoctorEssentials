from rest_framework import serializers

class PlantDetectionSerializer(serializers.Serializer):
    image = serializers.ImageField()
    plant_name = serializers.ChoiceField(choices=[
        ('corn_maize', 'Corn maize'),
        ('grapes', 'Grapes'),
        ('tomato', 'Tomato'),
        ('potato', 'Potato'),
    ])

class DataSerializer(serializers.Serializer):
    name =serializers.CharField(max_length =100)
    profession = serializers.CharField(max_length =100)
    age = serializers.IntegerField()

