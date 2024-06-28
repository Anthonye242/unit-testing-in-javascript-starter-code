const { expect } = require("chai");
const { validateEmail, validatePassword, validatePhoneNumber } = require("../src/basic-functions.js");

// Test: validateEmail should correctly identify a valid email address
describe('validateEmail function', () => {
    it("should correctly identify a valid email address", () => {
        const validEmail = 'test@example.com';
        const result = validateEmail(validEmail);
        expect(result).to.be.true;
    });
});

// Test: validatePassword function
describe('validatePassword function', () => {
    it('should return true for a password with length >= 8', () => {
        const samplePassword = 'strongPassword';
        const result = validatePassword(samplePassword);
        expect(result).to.be.true;
    });

    it('should return false for a password with length < 8', () => {
        const samplePassword = 'weak';
        const result = validatePassword(samplePassword);
        expect(result).to.be.false;
    });

    it('should return false for an empty password', () => {
        const samplePassword = '';
        const result = validatePassword(samplePassword);
        expect(result).to.be.false;
    });
});

// Test: validatePhoneNumber function
describe('validatePhoneNumber function', () => {
    it("should return true for a valid phone number", () => {
        const validPhoneNumber = "1234567890";
        const result = validatePhoneNumber(validPhoneNumber);
        expect(result).to.be.true;
    });

    it("should return false for a phone number with a length other than 10 digits", () => {
        const invalidPhoneNumber = "123456789";
        const result = validatePhoneNumber(invalidPhoneNumber);
        expect(result).to.be.false;
    });

    it("should return false for a phone number with non-digit characters", () => {
        const invalidPhoneNumber = "123abc4567";
        const result = validatePhoneNumber(invalidPhoneNumber);
        expect(result).to.be.false;
    });
});

      