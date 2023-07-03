from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('games/', views.say_hello)
]