/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Chrs - Chorasmian', () => {
		const chrs = factory('Chrs');

		it('instances are singletons', (next) => {
			const singleton = factory('Chrs');
			const upper = factory('CHRS');
			const lower = factory('chrs');
			const code = factory.code('Chrs');
			const numeric = factory.numeric('109');
			const number = factory.numeric(109);
			const instance = new ISO15924('Chrs', '109');

			expect(singleton).to.shallow.equal(chrs);
			expect(upper).to.shallow.equal(chrs);
			expect(lower).to.shallow.equal(chrs);
			expect(code).to.shallow.equal(chrs);
			expect(numeric).to.shallow.equal(chrs);
			expect(number).to.shallow.equal(chrs);
			expect(instance).not.to.shallow.equal(chrs);
			expect(instance.code).to.equal(chrs.code);
			expect(instance.numeric).to.equal(chrs.numeric);

			next();
		});

		it('has code "Chrs"', (next) => {
			expect(chrs.code).to.equal('Chrs');

			next();
		});

		it('has numeric "109"', (next) => {
			expect(chrs.numeric).to.equal('109');

			next();
		});

		it('implements toString', (next) => {
			expect(chrs.toString).to.be.function();
			expect(chrs.toString()).to.equal('Chrs');
			expect(String(chrs)).to.equal('Chrs');
			expect(0 + chrs).to.equal('0Chrs');
			expect('code:' + chrs).to.equal('code:Chrs');

			next();
		});

		it('implements toJSON', (next) => {
			expect(chrs.toJSON).to.be.function();
			expect(chrs.toJSON()).to.equal('Chrs');
			expect(JSON.stringify(chrs)).to.equal('"Chrs"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(chrs.valueOf).to.be.function();
			expect(chrs.valueOf()).to.equal(109);
			expect(Number(chrs)).to.equal(109);
			expect(+chrs).to.equal(109);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(chrs.valueOf).to.be.function();
			expect(chrs.valueOf()).to.equal(109);
			expect(Number(chrs)).to.equal(109);
			expect(+chrs).to.equal(109);

			expect(0 + chrs).to.equal('0Chrs');
			expect(String(chrs)).to.equal('Chrs');

			next();
		});
	});
});
