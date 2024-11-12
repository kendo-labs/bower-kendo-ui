/**
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export function fromESClass(ESClass) {
    class ExtendedClass extends ESClass {
        static extend(proto) {
            const subclass = class extends ExtendedClass {
                constructor() {
                    super();
                    if (proto && proto.init) {
                        proto.init.apply(this, arguments);
                    }
                }
            };

            // Copy the prototype so that the constructor is not overwritten
            Object.assign(subclass.prototype, proto);

            addInstanceGetter(subclass.prototype);

            // Apply the prototype to fn to allow for chaining
            subclass.fn = subclass.prototype;

            return subclass;
        }
    }

    addInstanceGetter(ExtendedClass.prototype);

    // Apply the prototype to fn to allow for chaining
    ExtendedClass.fn = ExtendedClass.prototype;

    return ExtendedClass;
}

function addInstanceGetter(proto) {
    Object.defineProperty(proto, '_instance', {
        get: function() {
            return this;
        }
    });
}