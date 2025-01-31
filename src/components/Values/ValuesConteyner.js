import { connect } from 'react-redux';
import Values from './Values';

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => (total += expense.amount), 0);
};

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: calculateTotalExpenses(state.expense),
});

export default connect(mapStateToProps)(Values);
