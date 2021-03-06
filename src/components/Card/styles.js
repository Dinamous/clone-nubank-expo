import styled from 'styled-components/native';
import {Animated} from 'react-native';


// export const Container = styled.View`
//   flex:1;
//   max-height:350px;
//   z-index:5;
// `;

export const Cardx = styled(Animated.View)`
flex:1;
background:#FFF;
border-radius:4px;
margin:0 20px;
height:100%;
position:absolute;
left:0;
right:0;
top:0px;
`;

export const CardHeader = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:20px;
`;

export const CardContent = styled.View`
flex:1;
padding:0 30px;
justify-content:center;
`;

export const Title = styled.Text`
font-size:15px;
color:#999
`;

export const Description = styled.Text`
font-size:36px;
margin-top:3px;
color:#333
`;

export const CardFooter = styled.View`
padding:30px;
background:#eee;
border-radius:4px
`;

export const Annotation = styled.Text`
font-size:13px;
color:#555;
`;
