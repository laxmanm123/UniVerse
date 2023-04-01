This is the second, hopefully final, setup of the app.
In this repo, you should see a universe folder as well as the README.
The Universe folder you see right now is the django project. Nothing too special about it for now.
Step inside to find 3 more folders. Universe, UniverseMain, and UniverseFrontend.
Universe contains basic stuff about Django setting itself up.
UniverseMain contains the bulk of the work. Inside this, you should see a models.py file where I have added a sample for what the database schema should look like. The sample is for a post but we need a lot more than just that. For people doing data, this is where we need to create the headers for querying.
For Lax, views.py is the place where we handle HTTP requests. The names of files are pretty conventional so it would be easy for us to see what else needs to go in there.
For Ruchi, Shira, and Meghna, I created the react app template inside UniverseFrontend so that you guys can get started on that. Hoping to keep frontend our priority till the first release because we need to look pretty if things aren't up to standard under the hood on the backend.
For me, I will be setting up authorization this weekend and once the database is ready, will add the API connections with Lax.

Let's get this thing going!
