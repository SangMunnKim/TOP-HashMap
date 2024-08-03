class Entry {
    constructor(key, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }

    toString() {
        return `( ${this.key}, ${this.value} )`
    }
}

class HashMap {
    constructor() {
        this.array = new Array(16).fill(null);
        this.capacity = this.array.length;
        this.occupied = 0;
        this.loadfactor = 0.5;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % this.capacity;
    } 
     

    set(key, value) {
        if (this.occupied / this.capacity >= this.loadfactor) {
            console.log("Resizing...");
            this.resize();
        }

        const bucket = this.hash(key);

        // if the hashmap doesn't contain key, add a new entry
        if (!this.has(key)) {
            const newEntry = new Entry(key, value);

            // if bucket is empty
            if (this.array[bucket] === null) {
                this.occupied += 1;
                this.array[bucket] = newEntry;
            } 
            // if bucket is not empty, add newEntry at the end of linked-list.
            else {
                let current = this.array[bucket];
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = newEntry;
            }
        } 
        // if the hashmap already contains the key, replace the value.
        else {
            let current = this.array[bucket];
            while (current !== null && current.key !== key) {
                current = current.next;
            }
            current.value = value;
        }
    }

    resize() {
        const oldArray = this.array;
        this.capacity *= 2;
        this.array = new Array(this.capacity).fill(null);
        this.occupied = 0;

        oldArray.forEach((bucket) => {
            let current = bucket;
            while (current !== null) {
                const newBucket = this.hash(current.key);
                const newEntry = new Entry(current.key, current.value, this.array[newBucket]);
                this.array[newBucket] = newEntry;
                this.occupied += 1;
                current = current.next;
            }
        });
    }

    get(key) {
        const bucket = this.hash(key);
        let current = this.array[bucket];

        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }

        return null;
    }

    has(key) {
        const bucket = this.hash(key);
        let current = this.array[bucket];

        while (current !== null) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    remove(key) {
        if (!this.has(key)) {
            return;
        }

        const bucket = this.hash(key);
        let current = this.array[bucket];

        // if the key is at the head of the list
        if (current.key === key) {
            this.array[bucket] = current.next;
            this.occupied -= 1;
            return;
        }

        // find the key in the linked list
        while (current.next !== null && current.next.key !== key) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
            this.occupied -= 1;
        }
    }

    length() {
        let counter = 0;

        this.array.forEach((bucket) => {
            let current = bucket;
            if (bucket !== null) {
                counter += 1;
                while (current.next !== null) {
                    counter += 1;
                    current = current.next;
                }
            }
        });

        return counter;
    }

    clear() {
        this.array = new Array(16).fill(null);
        this.capacity = this.array.length;
        this.occupied = 0;
    }

    keys() {
        let keys = [];

        this.array.forEach((bucket) => {
            let current = bucket;
            while (current !== null) {
                keys.push(current.key);
                current = current.next;
            }
        });

        return keys;
    }

    values() {
        let values = [];

        this.array.forEach((bucket) => {
            let current = bucket;
            while (current !== null) {
                values.push(current.value);
                current = current.next;
            }
        });

        return values;
    }

    entries() {
        let entries = [];
        
        this.array.forEach((bucket) => {
            let current = bucket;
            while (current !== null) {
                entries.push([current.key, current.value]);
                current = current.next;
            }
        });

        return entries;
    }
    
    toString() {
        let arrayString = '';
        this.array.forEach((bucket, index) => {
            let bucketString = `Bucket ${index}: `;
            let current = bucket;
            while (current !== null) {
                bucketString += current.toString() + ' -> ';
                current = current.next;
            }
            arrayString += bucketString + 'null\n'; // end of linked list
        });
        return ` ------Buckets------
        ${arrayString}
        Capacity: ${this.capacity},
        Occupied: ${this.occupied},
        Load factor: ${this.loadfactor}`;
    }
};

export { HashMap };
