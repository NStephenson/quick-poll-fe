#Round One

1. NavBar
   Links: 
    Signed in:
      Profile Page
      Make Poll
      Poll Index
      Log Out
    Signed Out: *Created*
      Login  *inactive link*
      Sign Up *inactive link*
      Make Poll *form included on home page, link unnecessary?*

2.  **Complete** Create Poll (Only options will be editable, not a primary concern tho)
    Create Componenent 
    Form Needs:
      Question Input
      6 Response Input
      Select Multiple cb
      Public Responses cb 
      Published cb 
    Should Redirect to poll form after submit 

3. **Complete** Poll Form Submission 
    Make Polls Submitable for NON USERS

4.  **Complete** Usability
    Make new poll redirect on submit
    Make responded poll swap to results on submit

5. The Dreaded AUTHENTICATION, PT1
    Following Pages need creation:
      Sign In
        -username or email, password
      Register
        -username, email, password, password confirm
      Sign out link
    Get User Sign ins working *works sorta*
    Get Signing out working
    Allow Users to only be signed in to certain pages

#Cleanup Tasks - After above is working, The following needs to be refactored

1. Poll.ts includes Poll.response_attributes, this might be better handled by a serializer

2. 

#Round Two

1. Edit Poll
2. Poll Form Validations
3. Make Poll submitable for users

#Bonus Features

1. Poll New should also show a real time updated Poll form. On submit, the new form should swipe left and vanish off screen. The submitted form should slide to the center.

2. Add comments for Polls