import {Link} from 'react-router-dom'

import {Ci, Cn, Li} from './style'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <Li>
      <Link to={`/courses/${id}`} className="link-el">
        <Ci src={logoUrl} alt={name} />
        <Cn>{name}</Cn>
      </Link>
    </Li>
  )
}

export default Item
