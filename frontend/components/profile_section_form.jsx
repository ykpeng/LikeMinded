const React = require('react');
const ProfileSectionActions = require('../actions/profile_section_actions');

const ProfileSectionForm = React.createClass({
  getInitialState(){
    return { content: this.props.profileSection.content }
  },

  handleInput(e){
    this.setState({ content: e.target.value });
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      id: this.props.profileSection.id,
      user_id: this.props.profileSection.user_id,
      section: this.props.profileSection.section,
      content: this.state.content
    }
    ProfileSectionActions.updateProfileSection(formData);
    this.props.closeForm();
  },

  handleCancel(e){
    e.preventDefault();
    this.props.closeForm();
  },

  render(){
    return(
      <div className="profile-section-form">
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleInput} value={this.state.content} />
          <input className="save" type="submit" value="SAVE"/>
          <button className="cancel" onClick={this.handleCancel}>CANCEL</button>
        </form>
      </div>
    )
  }
})
module.exports = ProfileSectionForm;
