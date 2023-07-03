from django.contrib import admin
from . import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'last_name']
    ordering = ['username']
    list_per_page = 30
