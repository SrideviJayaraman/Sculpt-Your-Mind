import React, { Component } from 'react';
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'
import QuizList from './screens/QuizList/QuizList'
import QuizInfo from './screens/QuizInfo/QuizInfo'
import StartQuiz from './screens/StartQuiz/StartQuiz'
import './App.css';

import 'typeface-roboto'

class App extends Component {
  constructor() {
    super()

    this.state = {
      quizzes: [

        {
          name: 'Easy Pop Questions',
          image: require("./images/images2.jfif") ,
          description:'HTML stands for HyperText Markup Language, It defines the structure of a Web document by using a variety of tags and attributes.',
          subQuiz: [
            {
              name: 'Level 1', questions: '4', time: '4 min', score: false,
              qArr: [
                {
                  question: "A kitten is laying in the middle of the road.Signal is to turn green within 5 secs! There is a mini Patrol nearby who is activating the Traffic signals. You're there standing at the nearby bus terminal and waiting for your bus.What will you do ?",
                  option1: "Will run in the middle at once and save the cat",
                  option2: "Mind my own business",
                  option3: "Inform the patrol to turn off the green light and save the cat",
                  option4: "Will get the help of somebody to save the cat",
                  answer: "3"
                },
                {
                  question: "Its your Birthday today! What's your plan?",
                  option1: "Go to temple for blessings and serve food for the poor nearby the temple ",
                  option2: "Make fun and  Enjoy with my friends",
                  option3: "Sit at home and Enjoy birthday",
                  option4: "Nothing special",
                  answer: "1"
                },
                {
                  question: "You conducted a successful job search, and now have three offers from which to choose.What can you do to most thoroughly investigate your potential employers?",
                  option1: "check out their websites",
                  option2: "watch the news to see if the companies are mentioned",
                  option3: "research their financial situations ",
                  option4: "speak with people who work for them already",
                  answer: "1,2,4"
                },
                {

                  question: "If highways were restricted to cars and only those trucks with capacity of less than 8 tons, most of the truck traffic would be forced to run outside highways. Such a reduction in the amount of truck traffic would reduce the risk of collisions on highways.",
                  option1: "Highways are experiencing overcrowded traffic mainly because of sharp increases in car traffic",
                  option2: "Many drivers of trucks would rather buy trucks with a capacity of less than 8 tons than be excluded from highways.",
                  option3: "The number of collisions that occur near highways has reduced in recent years",
                  option4: "Trucks that have a capacity of more than 8 tons cause a disproportionately large number of collisions on highways",
                  answer: "4"
                },

              ]
            },
            {
              name: 'Level 2', questions: '4', time: '4 mins', score: false,
              qArr: [
                {
                  question: "Some men are definitely intelligent, others are definitely not intelligent, but of intermediate men, we should say, 'intelligent'? Yes, I think, so or no, I shouldn't be inclined to call him intelligent.Which of the following reflects the intention of the writer well?",
                  option1: "To call men intelligent who are not strikingly so must be to use the concept with undue imprecision",
                  option2: "Every empirical concept has a degree of vagueness   ",
                  option3: "Calling someone intelligent or not depends upon one's whim",
                  option4: "There is no need to be as indecisive as the writer of the above",
                  answer: "1"
                },
                {
                  question: "A highly cohesive work group is a prerequisite for high team performance. Sociologists point out that the association between success and group cohesion owes to the support individual team members give to one another and their acceptance of the group's activities and goals.Each of the following, if true, either supports or cannot weaken the sociologists' assumption about the relationship between success and cohesion EXCEPT",
                  option1: "A group of Japanese researchers found that the successful work teams were led by dominant leaders",
                  option2: "University researchers found that there was a significant correlation between team productivity and the extent to which team members understood and complied with the group's objectives",
                  option3: "American researchers found that successful team members tended to rate their fellow members more favourably",
                  option4: "Industrial Psychologists of UK found that work groups who tended to participate in after-hours social activities were more productive",
                  answer: "1"
                },
                {

                  question: "In contrast to the earlier predictions, demand for sugarcane has not risen in recent years, yet, even though production amounts and price have also been stable during the last 3 years. Last year, sugarcane growers increased their profits by more than 10 percent over the previous year’s level Any of the following statements, if true, about last year, helps explain the rise in profits EXCEPT:",
                  option1: "Many sugar factories that are large consumers of sugarcane increase their production of sugarcane-based ethanol, yet their overall consumption of sugarcane decreased.",
                  option2: "Rainfall in sugarcane-growing regions was higher than it had been during previous year, allowing the growers to save money on expensive artificial irrigation.",
                  option3: "Sugarcane growers have saved money on wages by switching from paying labourers a daily wage to paying them by the amount harvested.",
                  option4: "Many small sugarcane growers joined together to form an association of sugarcane producers and began to buy supplies at low group rates.",
                  answer: "1"
                }
              ]
            },
          ]
        },
        {
          name: 'Intermediate Pop Questions',
          image: require("./images/images1.jfif") ,
          description:'CSS stands for Cascading Style Sheets, It describes how HTML elements are to be displayed on screen, paper, or in other media.',
          subQuiz: [
            {
              name: 'Level 1', questions: '4', time: '4 min', score: false,
              qArr: [
                {

                  question: "In contrast to the earlier predictions, demand for sugarcane has not risen in recent years, yet, even though production amounts and price have also been stable during the last 3 years. Last year, sugarcane growers increased their profits by more than 10 percent over the previous year’s level Any of the following statements, if true, about last year, helps explain the rise in profits EXCEPT:",
                  option1: "Many sugar factories that are large consumers of sugarcane increase their production of sugarcane-based ethanol, yet their overall consumption of sugarcane decreased.",
                  option2: "Rainfall in sugarcane-growing regions was higher than it had been during previous year, allowing the growers to save money on expensive artificial irrigation.",
                  option3: "Sugarcane growers have saved money on wages by switching from paying labourers a daily wage to paying them by the amount harvested.",
                  option4: "Many small sugarcane growers joined together to form an association of sugarcane producers and began to buy supplies at low group rates.",
                  answer: "1"
                },
                {

                  question: "You read a story in the newspaper about salary negotiations with public transportation  workers. The workers are threatening to go on strike tomorrow if their demands for  higher wages and better benefits are not met. What can you infer from this news story?",
                  option1: "Health insurance premiums are very expensive.",
                  option2: "The cost of gas will make ticket prices increase in the next few weeks.",
                  option3: "People who ride the bus should look for possible alternative transportation.                  ",
                  option4: "Employers never like to meet salary demands.",
                  answer: "3"
                },
                {
                  question: "A kitten is laying in the middle of the road.Signal is to turn green within 5 secs! There is a mini Patrol nearby who is activating the Traffic signals. You're there standing at the nearby bus terminal and waiting for your bus.What will you do ?",
                  option1: "Will run in the middle at once and save the cat",
                  option2: "Mind my own business",
                  option3: "Inform the patrol to turn off the green light and save the cat",
                  option4: "Will get the help of somebody to save the cat",
                  answer: "3"
                },
                {
                  question: "Its your Birthday today! What's your plan?",
                  option1: "Go to temple for blessings and serve food for the poor nearby the temple ",
                  option2: "Make fun and  Enjoy with my friends",
                  option3: "Sit at home and Enjoy birthday",
                  option4: "Nothing special",
                  answer: "1"
                },
                {

                  question: "In contrast to the earlier predictions, demand for sugarcane has not risen in recent years, yet, even though production amounts and price have also been stable during the last 3 years. Last year, sugarcane growers increased their profits by more than 10 percent over the previous year’s level Any of the following statements, if true, about last year, helps explain the rise in profits EXCEPT:",
                  option1: "Many sugar factories that are large consumers of sugarcane increase their production of sugarcane-based ethanol, yet their overall consumption of sugarcane decreased.",
                  option2: "Rainfall in sugarcane-growing regions was higher than it had been during previous year, allowing the growers to save money on expensive artificial irrigation.",
                  option3: "Sugarcane growers have saved money on wages by switching from paying labourers a daily wage to paying them by the amount harvested.",
                  option4: "Many small sugarcane growers joined together to form an association of sugarcane producers and began to buy supplies at low group rates.",
                  answer: "1"
                },
                {
                  question: "A highly cohesive work group is a prerequisite for high team performance. Sociologists point out that the association between success and group cohesion owes to the support individual team members give to one another and their acceptance of the group's activities and goals.Each of the following, if true, either supports or cannot weaken the sociologists' assumption about the relationship between success and cohesion EXCEPT",
                  option1: "A group of Japanese researchers found that the successful work teams were led by dominant leaders",
                  option2: "University researchers found that there was a significant correlation between team productivity and the extent to which team members understood and complied with the group's objectives",
                  option3: "American researchers found that successful team members tended to rate their fellow members more favourably",
                  option4: "Industrial Psychologists of UK found that work groups who tended to participate in after-hours social activities were more productive",
                  answer: "1"
                },

              ]
            },
          ]
        },
        {
          name: 'Challenging Pop Questions',
          image:  require("./images/worriedowman.png") ,
          description:'Challenging Pop Questions gives a bunch of positivity and challenging ideas.It makes you as a strong decision maker',
          subQuiz: [
            {
              name: 'Level 1', questions: '4', time: '4 mins', score: false,
              qArr: [
                {
                  question: "A kitten is laying in the middle of the road.Signal is to turn green within 5 secs! There is a mini Patrol nearby who is activating the Traffic signals. You're there standing at the nearby bus terminal and waiting for your bus.What will you do ?",
                  option1: "Will run in the middle at once and save the cat",
                  option2: "Mind my own business",
                  option3: "Inform the patrol to turn off the green light and save the cat",
                  option4: "Will get the help of somebody to save the cat",
                  answer: "3"
                },
                {
                  question: "Its your Birthday today! What's your plan?",
                  option1: "Go to temple for blessings and serve food for the poor nearby the temple ",
                  option2: "Make fun and  Enjoy with my friends",
                  option3: "Sit at home and Enjoy birthday",
                  option4: "Nothing special",
                  answer: "1"
                },
                {

                  question: "In contrast to the earlier predictions, demand for sugarcane has not risen in recent years, yet, even though production amounts and price have also been stable during the last 3 years. Last year, sugarcane growers increased their profits by more than 10 percent over the previous year’s level Any of the following statements, if true, about last year, helps explain the rise in profits EXCEPT:",
                  option1: "Many sugar factories that are large consumers of sugarcane increase their production of sugarcane-based ethanol, yet their overall consumption of sugarcane decreased.",
                  option2: "Rainfall in sugarcane-growing regions was higher than it had been during previous year, allowing the growers to save money on expensive artificial irrigation.",
                  option3: "Sugarcane growers have saved money on wages by switching from paying labourers a daily wage to paying them by the amount harvested.",
                  option4: "Many small sugarcane growers joined together to form an association of sugarcane producers and began to buy supplies at low group rates.",
                  answer: "1"
                },
                {

                  question: "You read a story in the newspaper about salary negotiations with public transportation  workers. The workers are threatening to go on strike tomorrow if their demands for  higher wages and better benefits are not met. What can you infer from this news story?",
                  option1: "Health insurance premiums are very expensive.",
                  option2: "The cost of gas will make ticket prices increase in the next few weeks.",
                  option3: "People who ride the bus should look for possible alternative transportation.                  ",
                  option4: "Employers never like to meet salary demands.",
                  answer: "3"
                },
              ]
            },
            {
              name: 'Level 2', questions: '6', time: '4 mins', score: false,
              qArr: [
                {
                  question: "A kitten is laying in the middle of the road.Signal is to turn green within 5 secs! There is a mini Patrol nearby who is activating the Traffic signals. You're there standing at the nearby bus terminal and waiting for your bus.What will you do ?",
                  option1: "Will run in the middle at once and save the cat",
                  option2: "Mind my own business",
                  option3: "Inform the patrol to turn off the green light and save the cat",
                  option4: "Will get the help of somebody to save the cat",
                  answer: "3"
                },
                {
                  question: "A highly cohesive work group is a prerequisite for high team performance. Sociologists point out that the association between success and group cohesion owes to the support individual team members give to one another and their acceptance of the group's activities and goals.Each of the following, if true, either supports or cannot weaken the sociologists' assumption about the relationship between success and cohesion EXCEPT",
                  option1: "A group of Japanese researchers found that the successful work teams were led by dominant leaders",
                  option2: "University researchers found that there was a significant correlation between team productivity and the extent to which team members understood and complied with the group's objectives",
                  option3: "American researchers found that successful team members tended to rate their fellow members more favourably",
                  option4: "Industrial Psychologists of UK found that work groups who tended to participate in after-hours social activities were more productive",
                  answer: "1"
                },
                {

                  question: "In contrast to the earlier predictions, demand for sugarcane has not risen in recent years, yet, even though production amounts and price have also been stable during the last 3 years. Last year, sugarcane growers increased their profits by more than 10 percent over the previous year’s level Any of the following statements, if true, about last year, helps explain the rise in profits EXCEPT:",
                  option1: "Many sugar factories that are large consumers of sugarcane increase their production of sugarcane-based ethanol, yet their overall consumption of sugarcane decreased.",
                  option2: "Rainfall in sugarcane-growing regions was higher than it had been during previous year, allowing the growers to save money on expensive artificial irrigation.",
                  option3: "Sugarcane growers have saved money on wages by switching from paying labourers a daily wage to paying them by the amount harvested.",
                  option4: "Many small sugarcane growers joined together to form an association of sugarcane producers and began to buy supplies at low group rates.",
                  answer: "1"
                },
                {

                  question: "You read a story in the newspaper about salary negotiations with public transportation  workers. The workers are threatening to go on strike tomorrow if their demands for  higher wages and better benefits are not met. What can you infer from this news story?",
                  option1: "Health insurance premiums are very expensive.",
                  option2: "The cost of gas will make ticket prices increase in the next few weeks.",
                  option3: "People who ride the bus should look for possible alternative transportation.                  ",
                  option4: "Employers never like to meet salary demands.",
                  answer: "3"
                },
                {

                  question: "Which scenario best represents a situation that has been decided by emotion alone?",
                  option1: "Sue hates the winter, so even though she can't afford it, she takes a vacation to the  Bahamas.",
                  option2: "The school shuts down after a bomb threat",
                  option3: "Third-quarter earnings for Marie's company were much higher than predicted",
                  option4: "Alexis needs a new mixer, so she watches the newspaper ads and buys one when it goes on sale.",
                  answer: "1"
                },
                {

                  question: "Marcy's American Lit teacher gives a quiz every Monday on the 50 pages of reading he assigns on Fridays. His quizzes are becoming harder as the semester progresses, and Marcy hasn't been doing very well on them. What can she do to troubleshoot the problemand hopefully get better grades on the quizzes?",
                  option1: "plan to get to class early on Monday to skim the pages",
                  option2: "look for a new outfit to wear on Monday so she'll be relaxed",
                  option3: "set aside time on Sunday to read and review the new material",
                  option4: "spend an hour on Saturday looking over what she missed on past quizzes",
                  answer: "3"
                },
              ]
            },
          ]
        },

      ],


      quizIndex: null,
      subQuizIndex: null,

      qstnNo: 0,

      validFlag: false,
      userFlag: true,

      userName: '',
      userEmail: '',
      userPass: '',
      loginEmail: '',
      loginPass: '',

      user: localStorage.getItem("user"),

    };

    // this.userAvailable = this.userAvailable.bind(this)

    this.updateText = this.updateText.bind(this)
    this.showSignup = this.showSignup.bind(this)
    this.showLogin = this.showLogin.bind(this)
    this.checkValidation = this.checkValidation.bind(this)

    this.joinQuiz = this.joinQuiz.bind(this);
    this.showList = this.showList.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.nextQstn = this.nextQstn.bind(this);
    this.back = this.back.bind(this);

    this.logout = this.logout.bind(this);
  }

  async updateText(e) {
    // console.log(e.target.name)
    // console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;

    if (name.match('name')) {
      await this.setState({
        userName: value
      })
      localStorage.setItem('userName', this.state.userName)
    }
    else if (name.match('userEmail')) {
      await this.setState({
        userEmail: value
      })
      localStorage.setItem('userEmail', this.state.userEmail)
    }
    else if (name.match('userPassword')) {
      await this.setState({
        userPass: value
      })
      localStorage.setItem('userPass', this.state.userPass)
    }
    else if (name.match('loginEmail')) {
      await this.setState({
        loginEmail: value
      })
    }
    else if (name.match('loginPass')) {
      await this.setState({
        loginPass: value
      })
    }
  }

  showSignup() {
    this.setState({
      userFlag: false,
      loginEmail: '',
      loginPass: ''
    })
  }

  showLogin() {
    const {userEmail, userPass} = this.state;
    if(userEmail == ''  || userPass == ''){
    alert('Fill all the fields');
  }
  else{
    this.setState({
      userFlag: true,
      userEmail:'',
      userPass:'',
    })
  }
  }


  async checkValidation() {
    const { loginEmail, loginPass } = this.state
    if ((loginEmail.match(localStorage.getItem('userEmail'))) && (loginPass.match(localStorage.getItem('userPass')))) {
      await this.setState({
        validFlag: true,
        user: true,
      })
      localStorage.setItem('user', 'true')
    }
    console.log("Email is Valid :", this.state.validFlag)
  }


  logout() {
    this.setState({
      // quizIndex: null,
      // subQuizIndex: null,
      user: 'false',
      // userFlag: false,
      validFlag: false,
      loginEmail: '',
      loginPass: '',
      quiz: null,
      started: null,
      qstnNo: 0,
    })
    localStorage.setItem('user', 'false')
  }

  joinQuiz(quizIndex) {
    const { quizzes } = this.state;
    this.setState({
      quiz: quizzes[quizIndex],
      quizIndex: quizIndex,
      quizName: quizzes[quizIndex].name,
    });
  }

  showList() {
    this.setState({ quiz: null });
  }

  startQuiz(subQuizIndex) {
    const { quizzes, quizIndex } = this.state;

    this.setState({
      started: quizzes[quizIndex].subQuiz[subQuizIndex],
      subQuizIndex: subQuizIndex,
      subQuizName: quizzes[quizIndex].subQuiz[subQuizIndex].name,
    });
  }

  nextQstn(nextQstnNo) {

    this.setState({
      qstnNo: nextQstnNo + 1
    });
  }

  back() {
    this.setState({
      started: null,
      qstnNo: 0,
    });
  }


  render() {
    const { userFlag, validFlag, quizzes, quiz, started, qstnNo, quizName, subQuizName, user } = this.state;

    return (
      <center>
      <div>
        {(user === 'false' || user === null) && !userFlag && <Signup updateText={this.updateText} showLogin={this.showLogin} />}
        {(user === 'false' || user === null) && (userFlag && !validFlag) && <Login showSignup={this.showSignup} validation={this.checkValidation} updateText={this.updateText} />}
        {(user === 'true' || (userFlag && validFlag)) && (!quiz && !started) && <QuizList list={quizzes} onPress={this.joinQuiz} logout={this.logout} />}
        {(user === 'true' || (userFlag && validFlag)) && (quiz && !started) && <QuizInfo quiz={quiz} onPress={this.startQuiz} onBack={this.showList} logout={this.logout} />}
        {(user === 'true' || (userFlag && validFlag)) && started && <StartQuiz quizName={quizName} subQuizName={subQuizName} started={started} qstnNo={qstnNo} onPress={this.nextQstn} back={this.back} logout={this.logout} />}
      </div>
      </center>
    )
  }

}

export default App;