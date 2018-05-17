import React from "react";
import styled, { css } from "styled-components";
import { themedColors } from "./colorVariants";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { darken } from "polished";

const filledButtonColorMixin = props => css`
  color: ${themedColors[props.color]};
  background-color: transparent;
  background-image: none;
  border-color: ${themedColors[props.color]};
  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${themedColors[props.color]};
    border-color: ${themedColors[props.color]};
  }
`;

const outlinedButtonColorMixin = props => css`
  color: #fff;
  background-color: ${themedColors[props.color]};
  border-color: ${themedColors[props.color]};
  background-image: none;
  &:hover:not(:disabled) {
    color: #fff;
    background-color: ${darken(0.075, themedColors[props.color])};
    border-color: ${darken(0.1, themedColors[props.color])};
  }
`;

const StyledButton = styled.button`
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: ${props => (props.filter ? "0.25rem 0 0 0.25rem" : "0.25rem")};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }

  ${props => props.outlined && filledButtonColorMixin(props)};
  ${props => !props.outlined && outlinedButtonColorMixin(props)};
  &:disabled {
    cursor: default;
  }
`;
const CloseIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  border: 1px solid;
  width: 36px;
  height: 100%;
  border-radius: 0 0.25rem 0.25rem 0;
  ${props => props.outlined && filledButtonColorMixin(props)};

  ${props =>
    !props.outlined &&
    css`
      ${props => outlinedButtonColorMixin(props)};
      border-left-color: #fff !important;
      z-index: 1;
    `};
  &:disabled {
    cursor: default;
  }
`;

const Label = styled.span`
  font-weight: 700;
  ${props =>
    props.hasValue &&
    css`
      margin-right: 0.5rem;
      &:after {
        content: ":";
      }
    `};
`;

const ButtonGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

const CloseIconWrapper = styled.div`
  margin-left: -1px;
`;

const Value = styled.span`
  font-weight: 300;
`;

const PositionedIcon = styled.div`
  position: relative;
  top: 1px;
`;

const nopClick = () => {};

const FilterButton = ({ label, value, outlined, color, disabled, filter, click }) => {
  const dis = disabled || false;
  const fr = filter || false;
  const hasValue = !!value;

  const clickHandler = click || nopClick;
  return fr ? (
    <ButtonGroup>
      <StyledButton outlined={outlined} color={color} filter={fr} disabled={dis} onClick={e => clickHandler(e)}>
        <Label hasValue={hasValue}>{label}</Label>
        {hasValue ? <Value>{value}</Value> : null}
      </StyledButton>
      <CloseIconWrapper>
        <CloseIcon outlined={outlined} color={color} disabled={dis} onClick={e => clickHandler(e)}>
          <PositionedIcon>
            <FontAwesomeIcon icon={faTimes} />
          </PositionedIcon>
        </CloseIcon>
      </CloseIconWrapper>
    </ButtonGroup>
  ) : (
    <StyledButton outlined={outlined} color={color} filter={fr} disabled={dis} onClick={e => clickHandler(e)}>
      <Label hasValue={hasValue}>{label}</Label>
      {hasValue ? <Value>{value}</Value> : null}
    </StyledButton>
  );
};

export default FilterButton;
