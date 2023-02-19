import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from '../components/Statistics';
import Section from './Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setStateGood] = useState(0);
  const [neutral, setStateNeutral] = useState(0);
  const [bad, setStateBad] = useState(0);

  // інший варіант
  // const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  // const { good, neutral, bad } = state;

  const counterFeedback = type => {
    switch (type) {
      case 'good':
        setStateGood(good + 1);
        break;
      case 'neutral':
        setStateNeutral(neutral + 1);
        break;
      case 'bad':
        setStateBad(bad + 1);
        break;
      default:
        console.log(`Ups, there is some problem with ${type} button`);
    }
  };

  // інший варіант (!!! додати state до аргументів)
  // const counterFeedback = e => {
  //   setState(prevState => ({
  //     ...prevState,
  //     [e]: prevState[e] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positivePercentageFeedbacks = () => {
    const percentage = Math.round((good * 100) / countTotalFeedback());
    return percentage;
  };

  const array = ['good', 'neutral', 'bad'];

  const positiveFeedbackPercentage =
    good === 0 ? 0 : positivePercentageFeedbacks();

  const title = '☕️ Cafe Expresso ☕️';

  return (
    <>
      <Section title={title}>
        <FeedbackOptions options={array} onLeaveFeedback={counterFeedback} />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message=" 🤷‍♂️ There is no feedback 🤷‍♂️" />
        )}
      </Section>
    </>
  );
};

export default App;
