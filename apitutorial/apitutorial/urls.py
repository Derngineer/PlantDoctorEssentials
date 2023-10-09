from django.urls import include, path
from rest_framework import routers
from quickstart import views as quickstart_views
from plantdoctor import views as plantdoctor_views
from plantdoctor.views import PickDiseaseView


router = routers.DefaultRouter()
router.register(r'users', quickstart_views.UserViewSet)
router.register(r'groups', quickstart_views.GroupViewSet)
router.register(r'bikes',quickstart_views.BikesViewSet)

from django.urls import path

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/predict/', PickDiseaseView.as_view()),
    path('api/test/', plantdoctor_views.testing_view),
    path('api/add/', plantdoctor_views.add_data),
]        
