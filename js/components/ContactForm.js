var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        React.createElement('form', {className: 'contact_form form-group'},
          React.createElement('label', {htmlFor: 'name' }, 'Imię: '),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Imię',
            value: this.props.contact.firstName,
            className: 'form-control'
          }),
          React.createElement('label', {htmlFor: 'surname'}, 'Nazwisko: '),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Nazwisko',
            value: this.props.contact.lastName,
            className: 'form-control'
          }),
          React.createElement('label', {htmlFor: 'email'}, "e-mail: "),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            value: this.props.contact.email,
            className: 'form-control'
          }),
          React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, 'Dodaj kontakt')
        )
      )
    },
  })