import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { string } from 'yup';

var FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      propValues = _ref.propValues,
      validateOnBlur = _ref.validateOnBlur,
      validateOnChange = _ref.validateOnChange,
      onSubmit = _ref.onSubmit;
  return React.createElement(Formik, {
    initialValues: propValues,
    onSubmit: onSubmit,
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur
  }, function (formikBag) {
    return React.createElement(Form, {
      onSubmit: formikBag.handleSubmit
    }, children);
  });
};

var validate = function validate(value, name, required) {
  try {
    var buildIfRequired = function buildIfRequired(required) {
      return {
        is: required,
        then: string(),
        otherwise: string().required(name + " is a required Field")
      };
    };

    console.log('Value', value);
    console.log('Name', name);
    console.log('required', required);
    var errors = '';
    var schema = string().max(10, name + " Must be 10 character").when("" + name, buildIfRequired(required));
    var result = schema.validate(value).then(function () {
      errors = null;
      return errors;
    }).catch(function (e) {
      if (e.message !== null || e.message !== undefined) errors = e.message;
      return errors;
    });
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

var styles = {
  color: 'red'
};

var ErrorMessageComponent = function ErrorMessageComponent(_ref) {
  var children = _ref.children,
      render = _ref.render,
      name = _ref.name,
      className = _ref.className,
      component = _ref.component;
  return React.createElement("div", {
    style: styles
  }, React.createElement(ErrorMessage, {
    name: name,
    children: children,
    render: render,
    className: className,
    component: component
  }));
};
ErrorMessageComponent.displayName = 'Error Message';

var TextField = function TextField(_ref) {
  var name = _ref.name,
      required = _ref.required;
  return React.createElement(React.Fragment, null, React.createElement(Field, {
    name: name,
    validate: function validate$1(e) {
      return validate(e, name, required);
    }
  }), React.createElement(ErrorMessageComponent, {
    name: name
  }));
};

var SubmitButton = function SubmitButton(_ref) {
  var styles = _ref.styles,
      text = _ref.text;
  return React.createElement("input", {
    type: 'submit',
    value: text,
    style: styles
  });
};
SubmitButton.displayName = 'Submit Button';

export { FormComponent, SubmitButton, TextField };
//# sourceMappingURL=index.modern.js.map
