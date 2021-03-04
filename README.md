Taken from getfutureproof!  Joint project with Aaron Yates.

The current version mostly works but we just need to fix a couple of things:
- [] Fix naming of custom error subclass
- [] Integrate automatic increments/decrements of hunger/happiness levels based on time passage
- [] Get program to close automatically when user has finished playing

# Exercises
- **Tamagotchi**: Create a text-based game in nodejs that enables us to control a pet via user input.
    - **Create a new class named Pet**. A Pet should have at least three features name, happiness level, hunger level and any more you think are important.
    - **Create a function that asks the user for their input**. This function should cope with the three following occasions:
        - Creating a new pet and giving it a name and any other features defined.
        - User wants to feed or play with their pet..
        - User wants to check in with their pet and see how it’s happiness and hunger levels are. \
  *Note: These will require you to create methods within your Pet class.* \
  *It is your choice as to whether you encapsulate your app logic in another class*
    - **Implement Error handling**
    - How can you make this a more engaging game? What else would be cool for your pet to do? Can the user choose the type of food they feed their pet, with the pet randomly deciding if they like it or not?
