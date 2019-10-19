/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bhks - Bhaiksuki', () => {
		const bhks = factory('Bhks');

		it('instances are singletons', (next) => {
			const singleton = factory('Bhks');
			const upper = factory('BHKS');
			const lower = factory('bhks');
			const code = factory.code('Bhks');
			const numeric = factory.numeric('334');
			const number = factory.numeric(334);
			const instance = new ISO15924('Bhks', '334');

			expect(singleton).to.shallow.equal(bhks);
			expect(upper).to.shallow.equal(bhks);
			expect(lower).to.shallow.equal(bhks);
			expect(code).to.shallow.equal(bhks);
			expect(numeric).to.shallow.equal(bhks);
			expect(number).to.shallow.equal(bhks);
			expect(instance).not.to.shallow.equal(bhks);
			expect(instance.code).to.equal(bhks.code);
			expect(instance.numeric).to.equal(bhks.numeric);

			next();
		});

		it('has code "Bhks"', (next) => {
			expect(bhks.code).to.equal('Bhks');

			next();
		});

		it('has numeric "334"', (next) => {
			expect(bhks.numeric).to.equal('334');

			next();
		});

		it('implements toString', (next) => {
			expect(bhks.toString).to.be.function();
			expect(bhks.toString()).to.equal('Bhks');
			expect(String(bhks)).to.equal('Bhks');
			expect(0 + bhks).to.equal('0Bhks');
			expect('code:' + bhks).to.equal('code:Bhks');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bhks.toJSON).to.be.function();
			expect(bhks.toJSON()).to.equal('Bhks');
			expect(JSON.stringify(bhks)).to.equal('"Bhks"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bhks.valueOf).to.be.function();
			expect(bhks.valueOf()).to.equal(334);
			expect(Number(bhks)).to.equal(334);
			expect(+bhks).to.equal(334);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bhks.valueOf).to.be.function();
			expect(bhks.valueOf()).to.equal(334);
			expect(Number(bhks)).to.equal(334);
			expect(+bhks).to.equal(334);

			expect(0 + bhks).to.equal('0Bhks');
			expect(String(bhks)).to.equal('Bhks');

			next();
		});
	});
});
