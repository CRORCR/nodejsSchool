jsû�и�����,ͳһʹ��number����
�������������ʱ��,���о�������,���� 1/3 ===(1-2/3) false
������������,ʹ�þ���ֵ,�Լ����ƾ��� Math.abs(1/3 - (1-2/3))<0.0001 true
JavaScript��������԰��������������� [1, 3.14, 'Hello', null, true];
JavaScript�Ķ�����һ���ɼ�-ֵ��ɵ����򼯺� ����ļ������ַ������ͣ�ֵ������������������
����������ͨ��.��������ɵģ�����Ҫ��������������һ����Ч�ı�������������������������ַ����ͱ�����''������
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null,
     'middle-school': 'No.1 Middle School'  //���һ�в���, ��������ַ�,��Ҫ��''
};
����Ҳ����ɾ������
delete xiaoming.age; // ɾ��age����
xiaoming.age; // undefined
delete xiaoming['name']; // ɾ��name����
�ж������Ƿ���� 'name' in xiaoming; // true �����Ǽ̳�����
xiaoming.hasOwnProperty('name'); // true ֻ�����Լ���

JavaScript�У�ʹ�õȺ�=�Ա������и�ֵ��
���԰������������͸�ֵ��������ͬһ���������Է�����ֵ�����ҿ����ǲ�ͬ���͵ı�����
����Ҫע��ֻ����var����һ��

var a = 123; // a��ֵ������123
a = 'ABC'; // a��Ϊ�ַ���

���ֱ����������Ͳ��̶������Գ�֮Ϊ��̬����
��̬�����ڶ������ʱ����ָ���������ͣ������ֵ��ʱ�����Ͳ�ƥ�䣬�ͻᱨ��(java)

JavaScript�����֮����Ϊ�˷����ѧ��ѧϰ������ǿ��Ҫ����var����������
�����ƴ�����������صĺ����
���һ������û��ͨ��var�����ͱ�ʹ�ã���ô�ñ������Զ�������Ϊȫ�ֱ�����
i = 10; // i������ȫ�ֱ���

�ַ���
''��""����ʾ�ַ���
���������ϵ,��Ҫʹ��\ת��һ��
�����ַ���ʹ�÷�����``

����
js����û��Խ��һ˵,�����˽Ǳ�,����undefined

slice
�������Ƭ,�����������,��copyЧ��һ��

push��pop
push ĩβ���ӣ�popβ������

unshift��shift
unshift:ͷ������ shiftͷ������

sort ����
var arr = ['B', 'C', 'A'];
arr.sort()
reverse ��ת
arr.reverse()

splice()�������޸�Array�ġ����ܷ�������
�����Դ�ָ����������ʼɾ������Ԫ�أ�Ȼ���ٴӸ�λ����������Ԫ��
var arr = ['aa', 'bb', 'cc', 'dd','ee','ff'];
// ������2��ʼɾ��3��Ԫ��,Ȼ������������Ԫ��:
arr.splice(2, 3, 'Google', 'Facebook'); // ����ɾ����Ԫ�� ['cc', 'dd','ee']
arr; // ['aa', 'bb', 'Google', 'Facebook','ff']
// ֻɾ��,������
arr.splice(2, 2); // ['Google', 'Facebook']
// ֻ����,��ɾ��
arr.splice(2, 0, 'Google', 'Facebook'); // ����[],��Ϊû��ɾ���κ�Ԫ��
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

concat array����
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]); //���ص����µ�����
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']

join ���������

mapʹ��
js�е�map��ʾ��ʽ�����ڶ�ά����
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95