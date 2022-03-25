import React, {Component} from "react";//라이브러리 호출

class Person extends Component{
  render(props){ //메서드 =>컴포넌트에서 무조건 들어가야 되는 메서드
    //컴포넌트에 필요한 데이터
 

    //HTML 템플릿 이런식으로 reture이 되서 삽입이 된다
    return(
      <React.Fragment>
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
      </React.Fragment>
    )
  }
}
export default Person