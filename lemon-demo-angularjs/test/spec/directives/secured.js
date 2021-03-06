'use strict';

describe('Directive: secured', function () {

  // load the directive's module
  beforeEach(module('angularSampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<secured></secured>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the secured directive');
  }));
});
