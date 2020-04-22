varying vec3 vUv;
uniform float u_time;


vec3 colorA = vec3(0.149,0.141,0.912);
vec3 colorB = vec3(1.000,0.833,0.224);


void main() {

	float percent = abs(sin(u_time));


	gl_FragColor = vec4(mix(colorA, colorB, percent), 1.0);
}
