import React from 'react'

class FilterOptions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      type: {}
    }
    this.sortType = this.sortType.bind(this)
  }

  sortType = async () => {
    await this.props.questionList.map(obj => {
      let topic = obj.topic.toUpperCase()
      if (!this.state.type.hasOwnProperty(topic)) {
        this.setState({
          type:{
            [topic] : [obj]
          }
        })
      }
      else{
        let prevArr = this.state.type.topic;
        prevArr.push(obj)
        this.setState({
          type: {
            [topic] : prevArr
          }
        })
      }
    })
  }

  async componentDidMount() {
    await this.sortType
    console.log(this.state.type)

  }

  render() {
    return(
    ""
    )
  }
}