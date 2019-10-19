/* global source, describe, it, each, expect */

const factory = source('main');
const ISO15924 = source('ValueObject/ISO15924');

describe('ISO 15924', () => {
	describe('Bass - Bassa Vah', () => {
		const bass = factory('Bass');

		it('instances are singletons', (next) => {
			const singleton = factory('Bass');
			const upper = factory('BASS');
			const lower = factory('bass');
			const code = factory.code('Bass');
			const numeric = factory.numeric('259');
			const number = factory.numeric(259);
			const instance = new ISO15924('Bass', '259');

			expect(singleton).to.shallow.equal(bass);
			expect(upper).to.shallow.equal(bass);
			expect(lower).to.shallow.equal(bass);
			expect(code).to.shallow.equal(bass);
			expect(numeric).to.shallow.equal(bass);
			expect(number).to.shallow.equal(bass);
			expect(instance).not.to.shallow.equal(bass);
			expect(instance.code).to.equal(bass.code);
			expect(instance.numeric).to.equal(bass.numeric);

			next();
		});

		it('has code "Bass"', (next) => {
			expect(bass.code).to.equal('Bass');

			next();
		});

		it('has numeric "259"', (next) => {
			expect(bass.numeric).to.equal('259');

			next();
		});

		it('implements toString', (next) => {
			expect(bass.toString).to.be.function();
			expect(bass.toString()).to.equal('Bass');
			expect(String(bass)).to.equal('Bass');
			expect(0 + bass).to.equal('0Bass');
			expect('code:' + bass).to.equal('code:Bass');

			next();
		});

		it('implements toJSON', (next) => {
			expect(bass.toJSON).to.be.function();
			expect(bass.toJSON()).to.equal('Bass');
			expect(JSON.stringify(bass)).to.equal('"Bass"');

			next();
		});

		it('implements valueOf', (next) => {
			expect(bass.valueOf).to.be.function();
			expect(bass.valueOf()).to.equal(259);
			expect(Number(bass)).to.equal(259);
			expect(+bass).to.equal(259);

			next();
		});

		it('implements Symbol.toPrimitive', (next) => {
			expect(bass.valueOf).to.be.function();
			expect(bass.valueOf()).to.equal(259);
			expect(Number(bass)).to.equal(259);
			expect(+bass).to.equal(259);

			expect(0 + bass).to.equal('0Bass');
			expect(String(bass)).to.equal('Bass');

			next();
		});
	});
});
