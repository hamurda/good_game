# Generated by Django 4.2.2 on 2023-07-03 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='game',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='genre',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='platform',
            options={'ordering': ['name']},
        ),
        migrations.AlterField(
            model_name='genre',
            name='games_count',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='platform',
            name='games_count',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='publisher',
            name='games_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
