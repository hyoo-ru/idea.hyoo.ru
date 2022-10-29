# $hyoo_idea_plural

Wrapper for **Intl.PluralRules**

## API

**```other() : string```**
**```one() : string```**
**```two() : string```**
**```few() : string```**
**```many() : string```**

Override the required pluralization categories to return a word that needs pluralization.

```typescript
const plural = new $hyoo_idea_plural
plural.one = () => 'second'
plural.other = () => 'seconds'
```
Each language has its own set of pluralization categories, use resolvedOptions to find out which ones are needed.

```typescript
const de = new Intl.PluralRules('de-DE');
const usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.maximumFractionDigits; // 3
usedOptions.minimumFractionDigits; // 0
usedOptions.minimumIntegerDigits;  // 1
usedOptions.pluralCategories;      // Array [ "one", "other" ]
usedOptions.type;                  // "cardinal"
```


**```select( num : number ) : string```**

Returns the word in the correct pluralization category

## Usage example
