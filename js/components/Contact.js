var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contact_item clearfix row'},
          React.createElement('figure', {className: 'col-12 col-sm-5 col-md-3 col-lg-3 col-xl-3'}, 
            React.createElement('img', {
              className: 'contactImage',
              src: './images/contact.ico'})
          ),
          React.createElement('div', {className: 'col-12 col-sm-7 col-md-9 col-lg-9 col-xl-9'}, 
              React.createElement('p', {className: 'contact_label'}, 'Imię: ' + this.props.item.firstName),
              React.createElement('p', {className: 'contact_label'}, 'Nazwisko: ' + this.props.item.lastName),
              React.createElement('a', {className: 'contact_email', href: 'mailto:' + this.props.item.email},
                this.props.item.email)
          ),
          React.createElement('div', {className: 'clear'})
        )
      )
    },
  });

  