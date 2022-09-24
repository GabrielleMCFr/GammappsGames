import React from 'react';
// Add import statements below
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice.js'

let cardLogo = "./icon.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs)
  const dispatch = useDispatch()
  const matchedIDs = useSelector(selectMatchedIDs)
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
  };

  const autoFlip = () => {
    dispatch(resetCards())
  }

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className=".img-responsive" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check When you match a pair of cards, the cards keep showing their text and stop dispatching actions (first if statement) and the text will turn green (second if statement)
  if (visibleIDs.includes(id) || matchedIDs.includes(id) ) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id) || visibleIDs.includes(id)) {
    cardStyle = 'matched';
  }



  // 3rd if statement
  // implement number of flipped cards check
  // This stops the action from dispatching when cards are clicked so there can never be more than 2 cards visible at a time.
  if (visibleIDs.length === 2 && !matchedIDs.includes(id)) {
    cardStyle = 'no-match';
  }
  if (visibleIDs.length === 2) {
    click = () => {}
    setTimeout(() => {
      autoFlip()
    }, 1500) ;
    
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};