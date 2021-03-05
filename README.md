Taken from getfutureproof!  Joint project with Aaron Yates.

The current version mostly works but we just need to fix a couple of things:
- [] Fix naming of custom error subclass
- [] Integrate automatic increments/decrements of hunger/happiness levels based on time passage
- [] Get program to close automatically when user has finished playing

# To play:
- * Fork and clone this repo
- * `cd` into the directory you stored this in and open the files in your local environment (e.g. VS Code) 
- * Open a new terminal and run `node game.js`
- * You can quit at any time by using the "Command+C" or "Ctrl+C" shortcuts
- * Enjoy! 

# Functionality
- **Tamagotchi**: This a text-based game in nodejs that enables us to control a pet via user input.
    - **We created a new class named Pet**. Pet has three features: name, happiness level and hunger level (with potentially more to come!) 
    - **We also have a function that asks the user for their input**. This function handles the following occasions:
        - Creating a new pet and giving it a name and any other features defined
        - User wants to feed or play with their pet
        - User wants to check in with their pet and see how its happiness and hunger levels are
        - User wants to quit* /
  *Note: We created some methods within our Pet class, while the majority of the app logic is defined within a separate Tamagotchi class* \
    - **Implementing Error handling** - we have tried to implement custom error messages
    - There is potential for the inclusion of other game features. Watch this space! 
