
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('universeMain/', include("universeMain.urls")),
    path('', include("universeMain.urls")),
    path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls)
]
