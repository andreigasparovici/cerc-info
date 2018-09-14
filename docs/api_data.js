define({ "api": [
  {
    "type": "post",
    "url": "/me/active-group",
    "title": "Change user's active group",
    "name": "SetActiveGroup",
    "group": "ActiveGroup",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"groupId\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/me.js",
    "groupTitle": "ActiveGroup"
  },
  {
    "type": "post",
    "url": "/attendance/:date",
    "title": "Add attendance",
    "name": "AddAttendance",
    "group": "Attdendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true,\n  attendanceId: 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/attendance.js",
    "groupTitle": "Attdendance"
  },
  {
    "type": "post",
    "url": "/attendance/:groupId/:date/:userId",
    "title": "Add user to attendance",
    "name": "AddUser",
    "group": "Attdendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/attendance.js",
    "groupTitle": "Attdendance"
  },
  {
    "type": "get",
    "url": "/attendance",
    "title": "Get all attendances from active group",
    "name": "GetAllAtendances",
    "group": "Attdendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n[{\n   attendanceId: 3,\n   date: \"...\",\n   isPresent: true/false\n},{\n...\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/attendance.js",
    "groupTitle": "Attdendance"
  },
  {
    "type": "delete",
    "url": "/attendance/:groupId/:date/:userId",
    "title": "Remove user from attendance",
    "name": "RemoveUser",
    "group": "Attdendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/attendance.js",
    "groupTitle": "Attdendance"
  },
  {
    "type": "get",
    "url": "/attendance/:attendanceId/:userId/toggle",
    "title": "Toggle attendance for user",
    "name": "ToggleAttendance",
    "group": "Attdendance",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/attendance.js",
    "groupTitle": "Attdendance"
  },
  {
    "type": "post",
    "url": "/lesson-comments",
    "title": "Add comment to lesson",
    "name": "AddCommentToLesson",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"lessonId\": 7, \n  \"content\": \"This is a comment :)\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{ success: true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lesson-comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/lesson-comments/reply",
    "title": "Add reply to comment",
    "name": "AddReplyToComment",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"commentId\": 7, \n  \"content\": \"This is a reply :)\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{ success: true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lesson-comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "delete",
    "url": "/lesson-comments/:commentId",
    "title": "Delete comment",
    "name": "DeleteComment",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lesson-comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "put",
    "url": "/lesson-comments/:commentId",
    "title": "Edit comment",
    "name": "EditComment",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"content\": \"This is an edited comment\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lesson-comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Add a new group",
    "name": "AddGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"name\": \"Numele grupului\",\n  \"description\": \"Descrierea grupului\",\n  \"startDate\": \"YYYY-MM-DD\",\n  \"endDate\": \"YYYY-MM-DD\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "post",
    "url": "/groups/:groupId/:userId",
    "title": "Add user to group",
    "name": "AddUserToGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "delete",
    "url": "/groups/:groupId",
    "title": "Delete a group",
    "name": "DeleteGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupId/all-users",
    "title": "Get all users that are in the group or not",
    "name": "GetAllUsers",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n[{\n   userId: ...,\n   name: ...,\n   inGroup: ...\n},...]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/my",
    "title": "Get groups for the current user",
    "name": "GetCurrentGroups",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n[{\n   groupId: 2\n   name: \"Un grup\"\n},\n{\n   groupId: 3\n   name: \"Alt grup\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups/:groupId",
    "title": "Get group by id",
    "name": "GetGroupById",
    "group": "Groups",
    "permission": [
      {
        "name": "anyone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n   groupData: {\n     groupId: ...,\n     startDate: ....,\n     endDate: ....,\n     name: ...,\n     description: ...\n   },\n   users: [\"A\", \"B\" ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "Get all groups",
    "name": "GetGroups",
    "group": "Groups",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n  [\n    {\n       groupId: 3,\n       name: \"Clasa a X-a\",\n       description: \"Grup de pregătire pentru olimpiada de informatică\"\n    }, {\n       groupId: 4,\n       name: \"Clasa a XII-a\",\n       description: \"Grup de pregătire pentru olimpiada de informatică\"\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "put",
    "url": "/groups/:groupId",
    "title": "Modify a group",
    "name": "ModifyGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example (only use the fields that you want to update):",
          "content": "{\n  \"name\": \"Noul nume al grupului\",\n  \"description\": \"Noua descriere a grupului\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   groupId: 3,\n   name: \"Noul nume\",\n   description: \"Noua descriere\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/groups.js",
    "groupTitle": "Groups"
  },
  {
    "type": "post",
    "url": "/homework",
    "title": "Add homework to your active group",
    "name": "AddHomework",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"title\": \"O tema\",\n  \"description\": \"Descrierea temei\",\n  \"tags\": [\"stack\", \"queue\"],\n  \"tasks\": [\n    {\"content\": ..., \"type\": ...},\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true,\n  homeworkId: 8\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "post",
    "url": "/homework/task",
    "title": "Add task to homework",
    "name": "AddTaskToHomework",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"homeworkId\": 1,\n  \"content\": \"...\",\n  \"type\": ...\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true,\n  taskId: 8\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "put",
    "url": "/homework/:homeworkId",
    "title": "Modify homework",
    "name": "ChangeHomeworkById",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "Same as POST\nHTTP 200 OK\n{ success: true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "delete",
    "url": "/homework/:homeworkId",
    "title": "Delete homework by id",
    "name": "DeleteHomeworkById",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{ success: true }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "delete",
    "url": "/homework/task/:taskId",
    "title": "Delete task from homework",
    "name": "DeleteTaskFromHomework",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "get",
    "url": "/homework",
    "title": "Get homework from your active group",
    "name": "GetHomework",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n[{\n  homeworkId: 7,\n  title: \"Homework\",\n  description: \"...\",\n  tags: [..]\n}, ...]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "get",
    "url": "/homework/:homeworkId",
    "title": "Get homework (with tasks) by id",
    "name": "GetHomeworkById",
    "group": "Homework",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  homeworkId: ...,\n  groupId: ...,\n  title: ...,\n  description: ...,\n  tags: [...],\n  tasks: [\n  { taskId: ..., type: ..., content: ...}, ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/homework.js",
    "groupTitle": "Homework"
  },
  {
    "type": "post",
    "url": "/invite",
    "title": "Generate invitation for a teacher",
    "group": "Invitations",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"email\": \"john_smith@gmail.com\",\n  \"groupId\": 2,\n  \"type\": \"teacher\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n     \"succes\": true\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/invite.js",
    "groupTitle": "Invitations",
    "name": "PostInvite"
  },
  {
    "type": "get",
    "url": "/invite/validate/:inviteCode",
    "title": "Validate invite code",
    "name": "ValidateInviteCode",
    "group": "Invitations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteCode",
            "description": "<p>The invitation code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n   valid: true,\n   email: \"john_smith@gmail.com\",\n   privilege: 0,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error: Code not found",
          "content": "HTTP 200\n{\n   error: \"Cod inexistent!\"\n}",
          "type": "json"
        },
        {
          "title": "Error: Code already used",
          "content": "HTTP 200\n{\n   error: \"Codul a fost deja folosit!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/invite.js",
    "groupTitle": "Invitations"
  },
  {
    "type": "post",
    "url": "/lessons",
    "title": "Add a new lesson",
    "name": "AddLesson",
    "group": "Lessons",
    "permission": [
      {
        "name": "teacher"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n \t\"title\": \"Ciclu hamiltonian de cost minim\",\n \t\"content\": \"Continutul lectiei\",\n \t\"authorId\": 2,\n   \"tags\": [\"tag\", \"tag\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   \"success\": true,\n   \"lessonId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "delete",
    "url": "/lessons/:lessonId",
    "title": "Delete a lesson",
    "name": "DeleteLesson",
    "group": "Lessons",
    "permission": [
      {
        "name": "teacher"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>The lesson id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "get",
    "url": "/lessons/:lessonId",
    "title": "Get lesson by id",
    "name": "GetLessonById",
    "group": "Lessons",
    "permission": [
      {
        "name": "anyone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>The lesson id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  \"lessonId\": 2,\n  \"title\": \"Lectia 2\",\n  \"content\": \"Continutul lectiei\",\n  \"authorId\": 2,\n  \"authorName\": \"John Smith\"\n  \"tags\": [..],\n  \"comments\": [{\n    \"name\": ...,\n    \"userId\": ...,\n    \"commentId\": ...,\n    \"content\": ...,\n    \"replies\": [\n      // same structure as comment\n    ]\n  }, ...],\n  \"isRecommended\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "get",
    "url": "/lessons",
    "title": "Get all lessons",
    "name": "GetLessons",
    "group": "Lessons",
    "permission": [
      {
        "name": "anyone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n[\n   {\n       \"lessonId\": 2,\n       \"title\": \"Lectia 1\",\n       \"content\": \"Continutul lectiei\",\n       \"authorId\": 2,\n       \"tags\": [..]\n   },\n   {\n       \"lessonId\": 3,\n       \"title\": \"Lectia 2\",\n       \"content\": \"Continutul lectiei\",\n       \"authorId\": 2,\n       \"tags\": [..],\n       \"authorName\": \"...\",\n       \"isRecommended\": false\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "put",
    "url": "/lessons/:lessonId",
    "title": "Modify a lesson",
    "name": "ModifyLesson",
    "group": "Lessons",
    "permission": [
      {
        "name": "teacher"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>The group id (useless, kept only for symmetrical purposes)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>The lesson id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example (only use the fields that you want to update):",
          "content": "{\n  \"title\": \"Noul nume al lecţiei\",\n  \"content\": \"Noul conţinut\",\n  \"tags\": [\"...\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   \"success\": true\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Authenticate user",
    "name": "Login",
    "group": "Login",
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"email\": \"john_smith@gmail.com\",\n  \"password\": \"supersecurepassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n     token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5fc21pdGhAZ21haWwuY29tIiwibmFtZSI6IkpvaG4gU21pdGgiLCJwcml2aWxlZ2UiOjEsImlhdCI6MTUzMzA5NjYyNH0.9o8iQTOp1-p8s8gDV9bgY6lzg1Y2K-Zvilp_nLHN6zo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error: User not found",
          "content": "HTTP 200\n{\n   \"error\": \"User account not found!\"\n}",
          "type": "json"
        },
        {
          "title": "Error: Incorrect credentials",
          "content": "HTTP 200\n{\n   \"error\": \"Incorrect credentials!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/login.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get current user information",
    "name": "Me",
    "group": "Me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  email: \"john_smith@gmail.com\",\n  name: \"John Smith\",\n  privilege: 1,\n  activeGroupId: 1,\n  userId: 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/me.js",
    "groupTitle": "Me"
  },
  {
    "type": "post",
    "url": "/recommended_lessons",
    "title": "Add a recommended lesson to your active group",
    "name": "AddRecommended",
    "group": "Recommended",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"lessonId\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/recommended-lessons.js",
    "groupTitle": "Recommended"
  },
  {
    "type": "delete",
    "url": "/recommended_lessons/:lessonId",
    "title": "Remove a recommended lesson from your active group",
    "name": "DeleteRecommended",
    "group": "Recommended",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>The lesson id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/recommended-lessons.js",
    "groupTitle": "Recommended"
  },
  {
    "type": "get",
    "url": "/recommended-lessons",
    "title": "Get the recommended lessons for your active group",
    "name": "GetRecommended",
    "group": "Recommended",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/recommended-lessons.js",
    "groupTitle": "Recommended"
  },
  {
    "type": "get",
    "url": "/recommended_lessons/:lessonId/toggle",
    "title": "Toggle recommended lesson",
    "name": "ToggleRecommended",
    "group": "Recommended",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/recommended-lessons.js",
    "groupTitle": "Recommended"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register user account",
    "name": "RegisterUserAccount",
    "group": "Register",
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"name\": \"John Smith\",\n  \"password\": \"supersecurepassword\",\n  \"inviteCode\": \"NYKFV\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   user_id: 3,\n   name: \"John Smith\",\n   email: \"john_smith@gmail.com\",\n   privilege: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/register.js",
    "groupTitle": "Register"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Add a new user",
    "name": "AddUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n  \"email\": \"john_smith@gmail.com\",\n  \"password\": \"supersecurepassword\"\n  \"privilege\": 1\n  \"name\": \"John Smith\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   user_id: 3,\n   name: \"John Smith\",\n   email: \"john_smith@gmail.com\",\n   privilege: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n  [\n    {\n       user_id: 1,\n       name: \"Johnny Smith\",\n       email: \"johnny_smith@gmail.com\",\n       privilege: 0\n    },\n    {\n       user_id: 2,\n       name: \"John Smith\",\n       email: \"john_smith@gmail.com\",\n       privilege: 1\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:user_id",
    "title": "Get user by id",
    "name": "GetUsersById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user id</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 200 OK\n{\n   user_id: 2,\n   name: \"John Smith\",\n   email: \"john_smith@gmail.com\",\n   privilege: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:user_id",
    "title": "Modify a user",
    "name": "ModifyUser",
    "group": "Users",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example (only use the fields that you want to update):",
          "content": "{\n  \"name\": \"New Name\",\n  \"email\": \"new_email@gmail.com\",\n  \"password\": \"newsecurepassword\",\n  \"privilege\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n   user_id: 3,\n   name: \"John Smith\",\n   email: \"john_smith@gmail.com\",\n   privilege: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:user_id",
    "title": "Delete a user",
    "name": "UserGroup",
    "group": "Users",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer [jwt]</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTP 201 OK\n{\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/users.js",
    "groupTitle": "Users"
  }
] });
