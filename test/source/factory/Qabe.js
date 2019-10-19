/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Qabe - Codes reserved for private use', () => {
		const qabe = factory('Qabe');

		it('instances are singletons', (next) => {
			const singleton = factory('Qabe');
			const upper = factory('QABE');
			const lower = factory('qabe');
			const code = factory.code('Qabe');
			const numeric = factory.numeric('930');
			const number = factory.numeric(930);
			const instance = new ISO15924('Qabe', '930');

			expect(singleton).to.shallow.equal(qabe);
			expect(upper).to.shallow.equal(qabe);
			expect(lower).to.shallow.equal(qabe);
			expect(code).to.shallow.equal(qabe);
			expect(numeric).to.shallow.equal(qabe);
			expect(number).to.shallow.equal(qabe);
			expect(instance).not.to.shallow.equal(qabe);
			expect(instance.code).to.equal(qabe.code);
			expect(instance.numeric).to.equal(qabe.numeric);

			next();
		});

		it('has code "Qabe"', (next) => {
			expect(qabe.code).to.equal('Qabe');

			next();
		});

		it('has numeric "930"', (next) => {
			expect(qabe.numeric).to.equal('930');

			next();
		});

		it('implements toString', (next) => {
			expect(qabe.toString).to.be.function();
			expect(qabe.toString()).to.equal('Qabe');
			expect(String(qabe)).to.equal('Qabe');
			expect(0 + qabe).to.equal('0Qabe');
			expect('code:' + qabe).to.equal('code:Qabe');

			next();
		});

		it('implements toJSON', (next) => {
			expect(qabe.toJSON).to.be.function();
			expect(qabe.toJSON()).to.equal('Qabe');
			expect(JSON.stringify(qabe)).to.equal('"Qabe"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(qabe.valueOf).to.be.function();
			expect(qabe.valueOf()).to.equal(930);
			expect(Number(qabe)).to.equal(930);
			expect(+qabe).to.equal(930);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(qabe.valueOf).to.be.function();
			expect(qabe.valueOf()).to.equal(930);
			expect(Number(qabe)).to.equal(930);
			expect(+qabe).to.equal(930);

			expect(0 + qabe).to.equal('0Qabe');
			expect(String(qabe)).to.equal('Qabe');

			next();
		});
	});
});
