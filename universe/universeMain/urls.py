from django.urls import path
from . import views # . means current directory 

urlpatterns = [
    path('', views.home, name='universeMain-home'), #empty string since it is the home page
    path('about/', views.about, name='universeMain-about'), #empty string since it is the home page
]