import styled from 'styled-components';
import { theme } from '../theme';
import { ChevronDown } from '@styled-icons/boxicons-solid';
import { Link } from 'react-router-dom';

export const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.darkBlue};

`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    z-index: 10;
    h1{
        font-size: ${theme.fontSize.header3};
        font-family: ${theme.font};
        color: ${theme.colors.white};
        user-select: none;
    }
`;

export const DropDown = styled.div`
    font-size: ${theme.fontSize.text};
    font-family: ${theme.font};
    color: ${props => props.selected ? theme.colors.lightGreen : theme.colors.white};
    cursor: pointer;
    user-select: none;
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => props.speed ? '160px' : 'auto'};
    }
    &:hover{
        color: ${theme.colors.lightGreen};
        transition: .5s color ease;
    }
`;

export const Menu = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    width: ${props => props.width};
    height: ${props => props.height};
    position: absolute;
    margin-top: 35px;
    z-index: 999;
    background-color: ${theme.colors.white};
    .rules{
        color: ${theme.colors.black};
        p{
            margin: 15px 10px;
        }
    }
    .speed{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Button = styled.div`
    background-color: ${props => props.run ? 
        (props.start ? theme.colors.red : theme.colors.green) 
        : theme.colors.grey};
    font-family: ${theme.font};
    font-size: ${theme.fontSize.text};
    width: 150px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.white};
    user-select: none;
    &:hover{
        background-color: ${props => props.run ? 
            (props.start ? theme.colors.lightRed : theme.colors.lightGreen) 
            : theme.colors.lightGrey};
        transition: .5s background-color ease;
    }
`;

export const DownArrow = styled(ChevronDown)`
    margin-left: 5px;
    width: 20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${theme.fontSize.text};
    font-family: ${theme.font};
    color: ${theme.colors.white};
    user-select: none;
`;

export const Divider = styled.div`
    width: 1px;
    height: 40px;
    background-color: ${theme.colors.white};
`;

export const SpeedOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 0;
    color: ${props => props.selected ? theme.colors.green : theme.colors.lightGrey};
    &:hover{
        color: ${theme.colors.green};
        transition: .5s color ease;
    }
`;

export const Highlight = styled.span`
    color: ${theme.colors.lightGreen};
`;

// =========== Grid Styles ===========
export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.colCount}, 20px);
`;

export const Cell = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.live ? theme.colors.black : undefined};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
`;