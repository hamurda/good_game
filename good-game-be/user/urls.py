from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('user/', views.say_hello)
]