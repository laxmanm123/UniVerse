from django.urls import include, path
from . import views # . means current directory 

from rest_framework import routers

router = routers.DefaultRouter() 
#router will make sure our requests end up at the right resource dynamically. 
# If we add or delete items from the database, the URLs will update to match.
router.register(r'events', views.EventViewSet)
router.register(r'users', views.UserViewSet)


# urlpatterns = [
#     path('', views.home, name='universeMain-home'), #empty string since it is the home page
#     path('about/', views.about, name='universeMain-about'), #empty string since it is the home page
# ]

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]