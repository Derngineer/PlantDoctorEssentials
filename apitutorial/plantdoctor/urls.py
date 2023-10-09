from django.urls import path
from .import views



urlpatterns = [
    path('doctor',views.hello, name = "startdoctor"),
    path('pickdisease',views.pick_disease, name = "pick-disease"),
    
    ]