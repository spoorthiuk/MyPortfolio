import uniqid from 'uniqid'
import { programLan, databases, tools } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!programLan.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Programming Languages</h2>
      <ul className='skills__list'>
        {programLan.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        ---
      </ul>
      <h2 className='section__title'>DataBases</h2>
      <ul className='skills__list'>
        {databases.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <ul className='skills__list'>
        ---
      </ul>
      <h2 className='section__title'>Tools</h2>
      <ul className='skills__list'>
        {tools.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
    
  )
}

export default Skills
