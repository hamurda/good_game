from django.contrib import admin
from . import models


@admin.register(models.Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ['name', 'genre', 'publisher']
    ordering = ['name', 'genre', 'publisher']
    list_per_page = 30


admin.site.register(models.Genre)
admin.site.register(models.Platform)
admin.site.register(models.Publisher)
