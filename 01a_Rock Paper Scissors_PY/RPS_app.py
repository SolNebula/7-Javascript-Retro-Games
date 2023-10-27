import random

exit = False
user_points = 0
computer_points = 0

while exit == False:
    options =["rock", "paper", "scissors"]
    user_input = input("Choose: rock, paper, scissors or exit ")
    computer_input = random.choice(options)

    if user_input == "exit": 
        print("Game Over")
        print("Your total score is: " + str(user_points) + ". The computer's total score is: " + str(computer_points))
        exit = True

    if user_input == 'rock':
        if computer_input == 'rock':
            print("The computer also selected rock")
            print("It's a tie!")
        elif computer_input == 'paper':
            print("The computer selected paper")
            print("You lose!")
            computer_points += 1
        elif computer_input == 'scissors':
            print("The computer selected scissors")
            print("You win!")
            user_points += 1

    elif user_input == 'paper':
        if computer_input == 'paper':
            print("The computer also selected paper")
            print("It's a tie!")
        elif computer_input == 'scissors':
            print("The computer selected scissors")
            print("You lose!")
            computer_points += 1
        elif computer_input == 'rock':
            print("The computer selected rock")
            print("You win!")
            user_points += 1

    elif user_input == 'scissors':
        if computer_input == 'scissors':
            print("The computer also selected scissors")
            print("It's a tie!")
        elif computer_input == 'rock':
            print("The computer selected rock")
            print("You lose!")
            computer_points += 1
        elif computer_input == 'paper':
            print("The computer selected paper")
            print("You win!")
            user_points += 1

    elif user_input != "rock" or user_input != "paper" or user_input != "scissors" or user_input != "exit":
        print("Hmm, that seems to be an invalid entry. Please select 'rock' 'paper' 'scissors' or 'exit' to continue")