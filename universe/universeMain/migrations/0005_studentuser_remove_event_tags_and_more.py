# Generated by Django 4.1.4 on 2023-05-03 01:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        (
            "universeMain",
            "0004_remove_event_numberattendees_event_description_and_more",
        ),
    ]

    operations = [
        migrations.CreateModel(
            name="studentUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fname", models.CharField(max_length=100)),
                ("lname", models.CharField(max_length=100)),
                ("username", models.CharField(max_length=100)),
                ("pronouns", models.CharField(max_length=50)),
                ("age", models.PositiveIntegerField()),
                ("major", models.CharField(max_length=100)),
                ("residential_cluster", models.CharField(max_length=100)),
                ("bio", models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name="event",
            name="tags",
        ),
        migrations.RemoveField(
            model_name="event",
            name="typeOfEvent",
        ),
        migrations.AlterField(
            model_name="event",
            name="eventDate",
            field=models.TextField(default=""),
        ),
        migrations.AlterField(
            model_name="event",
            name="eventTitle",
            field=models.CharField(default="", max_length=200),
        ),
        migrations.AlterField(
            model_name="event",
            name="location",
            field=models.TextField(default=""),
        ),
        migrations.DeleteModel(
            name="Tag",
        ),
        migrations.AlterField(
            model_name="event",
            name="attendees",
            field=models.ManyToManyField(
                blank=True,
                related_name="attended_events",
                to="universeMain.studentuser",
            ),
        ),
        migrations.AlterField(
            model_name="event",
            name="author",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="universeMain.studentuser",
            ),
        ),
    ]
