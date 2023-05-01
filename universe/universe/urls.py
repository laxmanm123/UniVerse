
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import *

from universeMain.views import ReactView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('universeMain/', include("universeMain.urls")),
    path('', include("universeMain.urls")),
    path('accounts/', include('allauth.urls')),
    path('', ReactView.as_view(), name='react'),
]
