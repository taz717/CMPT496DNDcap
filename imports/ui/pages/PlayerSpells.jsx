import React from 'react';
import Spelldisplay from '../components/SpellDisplay';

<<<<<<< Updated upstream

export const PlayerSpells = () => {
  //PLACEHOLDER LIST OF SPELLS REPLACING JSON REF
  const spells = [
    {name:'Acid Splash', level:0, school:'Evocation',castingTime: '1 action', range: '60 feet', components:'V,S', concentration: false, duration: 'Instantaneous', desc: "You hurl a bubble of acid..."},
    {name:'Aid', level:2, school:'Evocation',castingTime: '1 action', range: '30 feet', components: 'V,S,M (a tiny strip of white cloth)', concentration: false, duration: '8 hours', desc: 'Your spells bolsters your allies with thoughness and resolve...'},
    {name:'Alter Self', level:2, school:'Transmutation',castingTime: '1 action', range: 'Self', components: 'V,S', concentration: true, duration: '1 hour', desc: 'You assume a different form...'},
  ];
  //TURN PALCEHOLDERS INTO LIST OF SPELLDISPLAYS
  const elements = [];
  for (let i = 0; i < spells.length; i++) {
    elements.push(<Spelldisplay spell={spells[i]}/>);
  }

  return (
    <div>
      <h1>
        Spells Known:
      </h1>
      {elements}
    </div>
  );
=======
const spellData = {
  name: 'Fire Bolt',
  level: 'Cantrip',
  school: 'Evocation',
  castingTime:'1 action',
  range: '120 feet',
  components: 'V, S',
  concentration: false,
  duration: 'Instantaneous',
  description: 'Bottom Text'
};

export const PlayerSpells = () => {
    return (
        <Spelldisplay spell = {spellData}/>
      );
>>>>>>> Stashed changes
};