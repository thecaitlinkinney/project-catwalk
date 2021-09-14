import React from 'react';
import QuestionEntryList from './QuestionEntryList.jsx';
import $ from 'jquery';


class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questionsList: []};
    this.updateQuestionsList = this.updateQuestionsList.bind(this);
  }

  componentDidMount() {
    this.updateQuestionsList();
  }

  updateQuestionsList() {
    $.ajax({
      type: 'GET',
      url: '/qa/questions',
      error: (err) => {
        console.log('Client GET Err:', err);
      },
      success: (data) => {
        this.setState({questionsList: data});
      }
    });
  }

  render() {
    return (
      <div className="qa-main">
        QUESTIONS & ANSWERS <br />
        <input type="text" className="qa-searchBar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <QuestionEntryList lists={this.state.questionsList}/>
      </div>
    );
  }
}

export default QuestionAnswer;

//TODO: Add a magnifying glass in searchBar