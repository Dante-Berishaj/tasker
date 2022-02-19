
/api/lists/{id}/tasks didnt let me process data even though i gave the 
bearer token in postman so I had to do it by filtering the tasks 
task_list_id property with the current lists id

{
    "success": false,
    "message": "Unauthorized for this action",
    "code": 401
}

the app fetches /dashboard today_tasks but could not figure out how to post. Could've filtered tasks again to render only tasks that are due today*?*!? but decided not to


no redux
not responsive

to run: the standard npm i => npm start, didnt do any shenanigans.
