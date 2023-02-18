import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from '../components/Statistics';
import Section from './Section';
import Notification from './Notification/Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = state;

  const counterFeedback = e => {
    setState(prevState => ({
      ...prevState,
      [e]: prevState[e] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    return total;
  };

  const positivePercentageFeedbacks = () => {
    const percentage = Math.round((state.good * 100) / countTotalFeedback());
    return percentage;
  };

  const array = ['good', 'neutral', 'bad'];

  const positiveFeedbackPercentage =
    state.good === 0 ? 0 : positivePercentageFeedbacks();

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
