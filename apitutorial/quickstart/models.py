from django.db import models

# Create your models here.
class Bikes(models.Model):
	name = models.CharField(max_length = 10)
	num_wheels = models.IntegerField()
	color = models.CharField(max_length = 10)

	def __str__(self):
		return f'{self.color} {self.name }'



